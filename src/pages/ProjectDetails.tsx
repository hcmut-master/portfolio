import { Link } from 'react-router-dom';

export default function ProjectDetails() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Breadcrumbs */}
      <div className="px-6 md:px-12 py-6 bg-surface">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
          <Link to="/" className="hover:text-primary cursor-pointer transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-primary">Project Analysis</span>
        </div>
      </div>

      {/* Hero Section */}
      <header className="hero-gradient text-on-primary py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">ADVANCED MACHINE LEARNING</span>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">COMPUTER VISION</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight max-w-4xl">
              Big Task 1 (BTL 1) - Computer Vision Analysis
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-4 text-on-primary/80">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">group</span>
                <span className="font-medium">Team Alpha</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">person</span>
                <span className="font-medium">Dr. Nguyen Huu D</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative abstract element */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/30 rounded-full blur-[100px]"></div>
      </header>

      {/* Quick Links Bar */}
      <section className="bg-surface-container py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-start">
          <a href="#" className="bg-surface-container-lowest text-primary px-6 py-3 rounded-md flex items-center gap-3 font-semibold text-sm shadow-sm transition-all hover:bg-surface-bright hover:shadow-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            Video Demo
          </a>
          <a href="#" className="bg-surface-container-lowest text-primary px-6 py-3 rounded-md flex items-center gap-3 font-semibold text-sm shadow-sm transition-all hover:bg-surface-bright hover:shadow-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_display</span>
            Presentation Video
          </a>
          <a href="#" className="bg-surface-container-lowest text-primary px-6 py-3 rounded-md flex items-center gap-3 font-semibold text-sm shadow-sm transition-all hover:bg-surface-bright hover:shadow-md">
            <span className="material-symbols-outlined">terminal</span>
            Source Code
          </a>
        </div>
      </section>

      {/* Content Area: The Curator's Layout */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Metadata (Curator's Sidebar) */}
        <aside className="lg:col-span-3 space-y-12">
          <div className="space-y-4">
            <p className="font-label text-xs font-bold tracking-widest text-on-surface-variant uppercase">PROJECT TIMELINE</p>
            <div className="space-y-2">
              <div className="p-4 bg-surface-container-low rounded-md">
                <p className="text-xs font-bold text-primary">SUBMISSION</p>
                <p className="text-sm font-medium">May 12, 2024</p>
              </div>
              <div className="p-4 bg-surface-container-low rounded-md">
                <p className="text-xs font-bold text-primary">REVIEW DATE</p>
                <p className="text-sm font-medium">May 20, 2024</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-label text-xs font-bold tracking-widest text-on-surface-variant uppercase">TECHNOLOGY STACK</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-medium">PyTorch</span>
              <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-medium">OpenCV</span>
              <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-medium">CUDA</span>
              <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-medium">Weights & Biases</span>
            </div>
          </div>
          <div className="p-6 bg-primary-container text-on-primary rounded-xl space-y-4">
            <p className="font-headline font-bold text-lg">Academic Integrity</p>
            <p className="text-sm text-on-primary-container leading-relaxed">This research follows the university's ethics guidelines for computer vision data collection.</p>
            <button className="w-full py-2 bg-on-primary text-primary-container rounded-md font-bold text-xs uppercase tracking-widest">VIEW DOI</button>
          </div>
        </aside>

        {/* Main Content Sections (Tabbed/Editorial) */}
        <article className="lg:col-span-9 space-y-24">
          {/* Section 1: EDA */}
          <section className="space-y-8">
            <div className="flex items-baseline justify-between border-b-2 border-primary/10 pb-4">
              <h2 className="font-headline text-3xl font-extrabold text-primary">01. Exploratory Data Analysis</h2>
              <span className="material-symbols-outlined text-primary cursor-pointer">expand_less</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p className="text-lg">Our initial phase involved a comprehensive audit of the dataset distribution across 12 distinct classes of microscopic imagery.</p>
                <p>We identified significant class imbalance in the "Rare Pathogen" category, which influenced our later augmentation strategy. Visual analysis showed a high variance in luminosity across data batches.</p>
              </div>
              <div className="bg-surface-container-low aspect-video rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container-high/50">
                  <span className="material-symbols-outlined text-4xl text-outline-variant">bar_chart</span>
                </div>
                <img className="w-full h-full object-cover opacity-20 mix-blend-multiply" alt="Data distribution chart showing class frequencies" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNu8NVmnPCnbPqkdySIOIW1sjskpfgY5zXb24R-rf2JpYOPay4wvQr3q5zr1im_GhBWmGcONZEq-d1fIygRbMf4QxnsuxftjKAQd7e-jJWBxtRuKy6qvNB7-t7Q7wbgkMJ0kmnL_lOKQejc_e4zQTBMgKUt4FBDL9yAMHY1i-cFBWOVqd0lsfFxhOnNq2O_kEKyKfyRE0c6Z6GegQWspFXMOssNx5Gxx0HwvjfC5NI3wV2PYMBbCkgBnpHjdoX9imOqiFdSz0wx90"/>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-md text-xs font-bold text-primary shadow-sm">
                  FIG 1: Dataset class distribution (pre-augmentation)
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Dataset & Dataloader */}
          <section className="space-y-8">
            <div className="flex items-baseline justify-between border-b-2 border-primary/10 pb-4">
              <h2 className="font-headline text-3xl font-extrabold text-primary">02. Dataset & Augmentation</h2>
              <span className="material-symbols-outlined text-primary cursor-pointer">expand_more</span>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl space-y-6">
              <p className="text-on-surface-variant">To combat overfitting, we implemented a custom pipeline using <i>Albumentations</i> with the following parameters:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-surface rounded-md border-l-4 border-surface-tint">
                  <span className="text-[10px] font-bold text-on-surface-variant block uppercase mb-1">ROTATION</span>
                  <span className="text-lg font-headline font-bold text-primary">±45°</span>
                </div>
                <div className="p-4 bg-surface rounded-md border-l-4 border-surface-tint">
                  <span className="text-[10px] font-bold text-on-surface-variant block uppercase mb-1">GAUSSIAN</span>
                  <span className="text-lg font-headline font-bold text-primary">σ=0.5</span>
                </div>
                <div className="p-4 bg-surface rounded-md border-l-4 border-surface-tint">
                  <span className="text-[10px] font-bold text-on-surface-variant block uppercase mb-1">BATCH SIZE</span>
                  <span className="text-lg font-headline font-bold text-primary">64</span>
                </div>
                <div className="p-4 bg-surface rounded-md border-l-4 border-surface-tint">
                  <span className="text-[10px] font-bold text-on-surface-variant block uppercase mb-1">WORKERS</span>
                  <span className="text-lg font-headline font-bold text-primary">8</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Model Construction */}
          <section className="space-y-8">
            <div className="flex items-baseline justify-between border-b-2 border-primary/10 pb-4">
              <h2 className="font-headline text-3xl font-extrabold text-primary">03. Construction & Training</h2>
              <span className="material-symbols-outlined text-primary cursor-pointer">expand_more</span>
            </div>
            <div className="relative bg-primary py-12 px-8 rounded-2xl overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-on-primary font-headline text-2xl font-bold">ResNet-50 Optimized Backbone</h3>
                  <p className="text-on-primary-container text-sm leading-relaxed">We modified the final fully connected layers to include dropout (p=0.3) and batch normalization to stabilize training on smaller image crops.</p>
                  <code className="block bg-primary-container/50 p-4 rounded text-primary-fixed font-mono text-xs whitespace-pre-wrap">
{`self.backbone = models.resnet50(pretrained=True)
self.fc = nn.Sequential(
  nn.Linear(2048, 512),
  nn.ReLU(),
  nn.Dropout(0.3),
  nn.Linear(512, num_classes)
)`}
                  </code>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-surface-container-highest/10 rounded-full border-4 border-dashed border-primary-fixed/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary-fixed">hub</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Experimental Results */}
          <section className="space-y-8">
            <div className="flex items-baseline justify-between border-b-2 border-primary/10 pb-4">
              <h2 className="font-headline text-3xl font-extrabold text-primary">04. Results & Analysis</h2>
              <span className="material-symbols-outlined text-primary cursor-pointer">expand_more</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Table Style */}
              <div className="space-y-4">
                <p className="font-label text-xs font-bold tracking-widest text-on-surface-variant uppercase">PERFORMANCE METRICS</p>
                <div className="overflow-hidden rounded-xl bg-surface-container-low">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container text-xs font-bold text-primary">
                      <tr>
                        <th className="px-6 py-4">Metric</th>
                        <th className="px-6 py-4">Baseline</th>
                        <th className="px-6 py-4">Our Model</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="hover:bg-surface-bright transition-colors">
                        <td className="px-6 py-4 font-medium">Accuracy</td>
                        <td className="px-6 py-4">84.2%</td>
                        <td className="px-6 py-4 text-surface-tint font-bold">92.7%</td>
                      </tr>
                      <tr className="bg-surface-container-lowest/40 hover:bg-surface-bright transition-colors">
                        <td className="px-6 py-4 font-medium">Precision</td>
                        <td className="px-6 py-4">81.5%</td>
                        <td className="px-6 py-4 text-surface-tint font-bold">91.2%</td>
                      </tr>
                      <tr className="hover:bg-surface-bright transition-colors">
                        <td className="px-6 py-4 font-medium">Recall</td>
                        <td className="px-6 py-4">79.8%</td>
                        <td className="px-6 py-4 text-surface-tint font-bold">89.5%</td>
                      </tr>
                      <tr className="bg-surface-container-lowest/40 hover:bg-surface-bright transition-colors">
                        <td className="px-6 py-4 font-medium">F1-Score</td>
                        <td className="px-6 py-4">80.6%</td>
                        <td className="px-6 py-4 text-surface-tint font-bold">90.3%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Chart Placeholder */}
              <div className="flex flex-col gap-4">
                <p className="font-label text-xs font-bold tracking-widest text-on-surface-variant uppercase">LEARNING CURVES</p>
                <div className="flex-1 bg-surface-container-low rounded-xl flex flex-col items-center justify-center p-8 gap-4 min-h-[300px]">
                  <div className="w-full h-48 relative overflow-hidden flex items-end gap-2">
                    <div className="w-full h-1/4 bg-tertiary-fixed rounded-t"></div>
                    <div className="w-full h-1/2 bg-tertiary-fixed rounded-t"></div>
                    <div className="w-full h-2/3 bg-tertiary-fixed rounded-t"></div>
                    <div className="w-full h-3/4 bg-tertiary-fixed rounded-t"></div>
                    <div className="w-full h-full bg-surface-tint rounded-t"></div>
                    <div className="w-full h-[95%] bg-surface-tint rounded-t"></div>
                  </div>
                  <p className="text-[10px] text-on-surface-variant italic">Training Loss (Brown) vs. Validation Accuracy (Blue)</p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Project Footer / Navigation */}
      <section className="bg-surface-container-high py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="font-headline text-2xl font-bold text-primary">Interested in the full report?</h3>
          <p className="text-on-surface-variant max-w-xl mx-auto">The complete PDF documentation includes detailed hyperparameter tuning logs and supplementary results.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-bold text-sm transition-transform hover:scale-[1.02]">DOWNLOAD PDF REPORT</button>
            <button className="bg-surface-container-lowest text-primary px-8 py-3 rounded-md font-bold text-sm transition-transform hover:scale-[1.02] shadow-sm">VIEW APPENDIX</button>
          </div>
        </div>
      </section>
    </div>
  );
}
