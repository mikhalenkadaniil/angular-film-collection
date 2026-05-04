import { Component, computed, inject } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private breadcrumbService = inject(BreadcrumbService);
  protected breadcrumbs = computed(() => {
    if (!this.breadcrumbService.breadcrumbs().length) return [];
    const breadcrumbs = this.breadcrumbService.breadcrumbs()
      .map((breadcrumb) => Object.assign(breadcrumb, { isLast: false }));
    const last = this.breadcrumbService.breadcrumbs().length - 1;
    breadcrumbs[last].isLast = true;
    return breadcrumbs;
  });
}
