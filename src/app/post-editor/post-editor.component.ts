import { Component, inject, signal } from '@angular/core';
import { MarkdownService } from '../markdown.service';

// 2.
// import { Component, inject, Injector, signal } from '@angular/core';
// import { MarkdownService } from '../markdown.service';

// 3.
// import { Component, injectAsync, onIdle, signal } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css'],
  
})
export class PostEditorComponent {
  protected readonly content = signal('');
  protected readonly previewHtml = signal('');
  private markdownService = inject(MarkdownService);

  preview() {
    this.previewHtml.set(this.markdownService.render(this.content()));
  }

  // 2.
  // private readonly injector = inject(Injector);
  // private markdownServicePromise: Promise<MarkdownService> | null = null;

  // async preview() {
  //   this.markdownServicePromise ??= import('../markdown.service').then(m =>
  //     this.injector.get(m.MarkdownService)
  //   );

  //   const markdownService = await this.markdownServicePromise;
  //   this.previewHtml.set(markdownService.render(this.content()));
  // }

  // 3.
  // private markdownService = injectAsync(
  //   () => import('../markdown.service').then(m => m.MarkdownService),
  //   { prefetch: onIdle }
  // );

  // async preview() {
  //   const svc = await this.markdownService();
  //   this.previewHtml.set(svc.render(this.content()));
  // }
}