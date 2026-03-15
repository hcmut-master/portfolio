export default function Footer() {
  return (
    <footer className="bg-surface-container py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-xl">school</span>
              </div>
              <span className="font-headline font-bold text-primary tracking-tight">CS Research Group</span>
            </div>
            <p className="font-body text-on-surface-variant max-w-sm leading-relaxed">
              Official research portal for the Advanced Machine Learning Course, exploring the frontiers of artificial intelligence and its practical applications.
            </p>
          </div>
          <div>
            <h5 className="font-label text-xs font-extrabold uppercase tracking-widest text-primary mb-6">ACADEMIC LINKS</h5>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">University Portal</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Course Syllabus</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Faculty</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label text-xs font-extrabold uppercase tracking-widest text-primary mb-6">RESOURCES</h5>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Research Papers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Lab Guidelines</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Data Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-on-surface-variant">
            © 2024 University Computer Science Department | Advanced Machine Learning Course
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">mail</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">terminal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
