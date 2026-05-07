import { Outlet } from 'react-router-dom';
import { AnnouncementBar } from '../announcements/AnnouncementBar';
import { ToastContainer } from '../toast/ToastContainer';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function PageShell() {
  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <AnnouncementBar />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <ToastContainer />
    </div>
  );
}
