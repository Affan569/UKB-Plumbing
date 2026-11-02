export const metadata = {
  title: "Inquiry Form | UKB Plumbing",
  description: "Send us your enquiry",
};

export default function InquiryFormPage() {
  return (
    <div style={{ width: "100%", minHeight: "80vh" }}>
      <iframe
        src="https://ukbplumbing.fillout.com/t/s5uwzWcheNus"
        title="Inquiry Form"
        style={{
          width: "100%",
          height: "85vh",
          border: "none",
        }}
        loading="lazy"
      />
    </div>
  );
}