import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="glass-nav sticky top-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center md:hidden lg:flex">
            <span className="material-symbols-outlined text-on-primary text-2xl">school</span>
          </div>
          <span className="font-headline font-extrabold text-lg md:text-xl tracking-tight text-primary">CS Research Group</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">Home</Link>
          <Link to="/" className="text-primary font-bold text-sm transition-colors">Projects</Link>
          <a href="#" className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">Documentation</a>
          <a href="#" className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">Team</a>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <button className="bg-primary text-on-primary px-4 md:px-5 py-2 md:py-2.5 rounded-md font-medium text-sm flex items-center gap-2 transition-transform hover:scale-[1.02] shadow-sm">
          <span className="material-symbols-outlined text-[18px] hidden md:block">code</span> GitHub
        </button>
        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/20">
          <img className="w-full h-full object-cover" alt="University Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJZyKaLw0akYLEZkJfpDXq8-weqCf-VUuquwVo9ZU_waRtmj4FzXi9vFpxwNsWqs6f0PxBt__kL8W8bJWGivjoL9VjIUw91IyoawpMXsUIZ_Aa-fxnrJ2OL08U822oV1yE0gnJeC6N7dWYUgZKB385jq8iv7-py1grAWWD099AAthlhabNqanyuC5AazmOBg02svOXTPnGXM_I4TnGN1fHhdQlLiR-wSC8yFJI8MFX-WWtjkbGFtK78UiqeWq_7zsyx6dV0NooI_8"/>
        </div>
      </div>
    </nav>
  );
}
