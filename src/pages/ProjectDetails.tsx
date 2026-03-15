import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        // Fetch the markdown file from the public directory
        const response = await fetch(`./projects/${id}/content.md`);
        if (!response.ok) {
          throw new Error('Project content not found');
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchContent();
    }
  }, [id]);

  // Base URL for resolving relative image paths in the markdown
  const baseUrl = `./projects/${id}/`;
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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-error-container text-on-error-container p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Error Loading Project</h3>
              <p>{error}</p>
            </div>
          ) : (
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
              <div className="markdown-body prose prose-slate max-w-none prose-headings:font-headline prose-headings:text-primary prose-p:text-on-surface-variant prose-li:text-on-surface-variant prose-a:text-primary prose-img:rounded-xl prose-img:shadow-md prose-table:w-full prose-table:text-left prose-th:px-6 prose-th:py-4 prose-th:bg-surface-container prose-th:text-primary prose-td:px-6 prose-td:py-4 prose-tr:border-b prose-tr:border-surface-container-high">
                <Markdown 
                  remarkPlugins={[remarkMath, remarkGfm]} 
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    img: ({node, ...props}) => {
                      // If the image source is relative, prepend the base URL
                      const src = props.src?.startsWith('http') || props.src?.startsWith('/') 
                        ? props.src 
                        : `${baseUrl}${props.src}`;
                      return <img {...props} src={src} alt={props.alt || ''} />;
                    }
                  }}
                >
                  {content}
                </Markdown>
              </div>
            </div>
          )}
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
