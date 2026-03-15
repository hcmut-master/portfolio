import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="hero-gradient rounded-xl p-12 md:p-20 relative overflow-hidden text-on-primary">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3 py-1 bg-on-primary/10 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase mb-6 font-label">COURSE REPOSITORY</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Group Project Portfolio
              </h1>
              <p className="font-body text-lg md:text-xl text-primary-fixed-dim leading-relaxed mb-10 opacity-90">
                An integrated research environment for Advanced Machine Learning, showcasing innovative computational solutions and rigorous academic inquiry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-on-primary-container">groups</span>
                  <div>
                    <p className="text-[10px] font-bold text-on-primary/60 uppercase font-label">Team Designation</p>
                    <p className="font-headline font-bold text-lg">Research Team Alpha</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-on-primary-container">person_check</span>
                  <div>
                    <p className="text-[10px] font-bold text-on-primary/60 uppercase font-label">Supervising Faculty</p>
                    <p className="font-headline font-bold text-lg">Dr. Nguyen Huu D</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-l from-primary-container to-transparent"></div>
              <img alt="Abstract Data" className="w-full h-full object-cover mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLwn8itkO-8B7d87-bQjPuiTnXoP1zLia6ZasMTVFpBwgJkUITHLaPh4KlzH0VeQSulk2KSHWsDF6qqGmebhT6MDmU4jRdF4bLsnjBb8EPptZECk8p1d3AQ80w-bR30MEVxltXDEPs4epIusVrHoLInICYZjf7tnKpl8yoXd56OvcSbL3VUgvYoeNDSBGbJCLMBgNoyVol1m10EAwWDhPAQHkGy1XYO_wa8uCAMkoufTj4ZLH_ePW84s3VWFz2LUZA1WDrBpClWtw"/>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="px-6 py-4 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-body">
          <span className="text-on-surface-variant">Home</span>
          <span className="material-symbols-outlined text-xs text-outline">chevron_right</span>
          <span className="text-primary font-semibold">Project Analysis</span>
        </div>
      </section>

      {/* Main Content: Team & Projects */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Side Sidebar: The "Curator's Sidebar" */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="font-label text-[10px] font-extrabold tracking-[0.2em] uppercase text-outline mb-8">RESEARCH MEMBERS</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl group transition-all hover:bg-surface-bright shadow-[0_4px_20px_rgba(25,28,30,0.03)]">
                  <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center font-headline font-bold text-on-secondary-fixed">NV</div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Nguyễn Hữu Trưởng</h4>
                    <p className="font-body text-xs text-on-surface-variant">2470573</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl group transition-all hover:bg-surface-bright shadow-[0_4px_20px_rgba(25,28,30,0.03)]">
                  <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center font-headline font-bold text-on-secondary-fixed">TB</div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Nguyễn Nhật Thanh</h4>
                    <p className="font-body text-xs text-on-surface-variant">2570316</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl group transition-all hover:bg-surface-bright shadow-[0_4px_20px_rgba(25,28,30,0.03)]">
                  <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center font-headline font-bold text-on-secondary-fixed">LC</div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Võ Thị Bích Phượng</h4>
                    <p className="font-body text-xs text-on-surface-variant">2470570</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-primary-container rounded-xl text-on-primary">
              <h3 className="font-headline font-bold text-xl mb-4">Project Status</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-sm opacity-80">Completion</span>
                <span className="font-label font-bold">85%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-on-primary-container h-full w-[85%]"></div>
              </div>
              <p className="mt-6 font-body text-sm text-primary-fixed-dim italic">"Currently finalizing the neural network optimization for better inference speeds."</p>
            </div>
          </aside>

          {/* Creative Canvas: All Projects */}
          <div className="lg:col-span-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-label text-[10px] font-extrabold tracking-[0.2em] uppercase text-outline mb-2">PORTFOLIO</h2>
                <h3 className="font-headline text-4xl font-extrabold text-primary">All Projects</h3>
              </div>
              <div className="h-px flex-grow mx-8 bg-surface-container-high mb-3"></div>
              <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
            </div>

            {/* Project Cards (Asymmetric Layout) */}
            <div className="grid grid-cols-1 gap-10">
              {/* Project 1 (BTL 1) */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(25,28,30,0.06)] group flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                  <img alt="BTL 1 Visual" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeU7UIZtZft5TCulVeHeSHbs-waLHixGi4uoBKF4xlP7do3pVA4WhiHDRUMOb0j1--1QZXlbACOP55yjqmUNxMApOcHG2PlBWPCSi1XBwUAddONimf8CdZr9VtDAAGuSbUYgEt-1-JvxzXfOTxQnlD_Ynj5fvWg0pRbmiCmtfBIuG115b3aHrWsO4cFtsqqVt4XaL8k0Fd87fprLbho5QRZoM1rkI3ZWYu7V3h2p3Cqy5TanlOJGqz3LJjM9imdByoONR-sjrriTY"/>
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                </div>
                <div className="md:w-2/3 p-10 flex flex-col justify-center">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-label">BTL 1</span>
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-label">ACTIVE</span>
                  </div>
                  <h4 className="font-headline text-2xl font-bold text-primary mb-4">Project 1 (BTL 1)</h4>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                    Implementation of deep convolutional neural networks for automated medical image analysis. This task involves fine-tuning pre-trained models on specialized healthcare datasets to improve diagnostic accuracy.
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <Link to="/project/btl1" className="px-8 py-3 bg-primary text-on-primary rounded-md font-medium text-sm transition-all hover:bg-surface-tint shadow-[0_4px_10px_rgba(0,28,74,0.15)]">
                      View Details
                    </Link>
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high overflow-hidden" title="Nguyen Van A">
                        <div className="w-full h-full flex items-center justify-center text-[10px] font-bold bg-secondary-fixed">NV</div>
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high overflow-hidden" title="Tran Thi B">
                        <div className="w-full h-full flex items-center justify-center text-[10px] font-bold bg-secondary-fixed">TB</div>
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high overflow-hidden" title="Le Van C">
                        <div className="w-full h-full flex items-center justify-center text-[10px] font-bold bg-secondary-fixed">LC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Project Placeholder */}
              <div className="p-10 border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center text-center opacity-60">
                <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">pending</span>
                <h4 className="font-headline text-xl font-bold text-outline">Project 2 (BTL 2)</h4>
                <p className="font-body text-sm text-on-surface-variant max-w-xs mt-2">
                  Deployment and optimization phase. Scheduled for release in mid-November.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
