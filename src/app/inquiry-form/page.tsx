import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import FilloutScript from '@/components/FilloutScript';

export default function InquiryFormPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <AnnouncementBar />
        <Header />
      </div>

      <FilloutScript />

      <section className="relative min-h-screen flex items-center justify-center pt-[120px] bg-gradient-to-br from-[#0a3b7c] to-[#082252]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0a3b7c] mb-6 text-center">
                Send Us a Message
              </h1>

              <div
                className="w-full overflow-hidden"
                data-fillout-id="s5uwzWcheNus"
                data-fillout-embed-type="standard"
                data-fillout-inherit-parameters
                data-fillout-dynamic-resize
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}