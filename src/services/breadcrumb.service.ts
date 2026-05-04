import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export interface IBreadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private _breadcrumbs = signal<IBreadcrumb[]>([]);
  readonly breadcrumbs = this._breadcrumbs.asReadonly();

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const breadcrumbs = this.build(this.route.root);
        console.log(breadcrumbs)
        this._breadcrumbs.set(breadcrumbs);
      }
    });
  }
  
  private build(route: ActivatedRoute, url = '', acc: IBreadcrumb[] = []): IBreadcrumb[] {
    const children = route.children;
    
    if (!children.length) return acc;

    for (const child of children) {
      const segment = child.snapshot.url.map(s => s.path).join('/');
      if (!segment) continue;
      
      url += `/${segment}`;
      
      const label = child.snapshot.data?.['breadcrumb'];

      if (label) {
        acc.push({ label, url });
      }
      
      return this.build(child, url, acc);
    }
    
    return acc;
  }
}
