
import {useEffect,useRef,useState,type ChangeEvent,type FormEvent} from "react";
import {ArrowRight,CheckCircle2,FileText,UploadCloud,X} from "lucide-react";
import "../../App.css";

type CareerApplicationProps = {
  selectedPosition?:string;
};

type FormFields = {
  name:string;
  email:string;
  position:string;
  coverLetter:string;
  website:string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const MAX_CV_BYTES = 5 * 1024 * 1024;

export default function CareerApplication({
  selectedPosition = "",
}:CareerApplicationProps) {
  const [fields,setFields] = useState<FormFields>({
    name:"",
    email:"",
    position:selectedPosition,
    coverLetter:"",
    website:"",
  });
  const [cvFile,setCvFile] = useState<File | null>(null);
  const [previewUrl,setPreviewUrl] = useState("");
  const [status,setStatus] = useState<SubmitStatus>("idle");
  const [feedback,setFeedback] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFields(previous => ({
      ...previous,
      position:selectedPosition,
    }));
  },[selectedPosition]);

  useEffect(() => {
    if (!cvFile) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(cvFile);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  },[cvFile]);

  const updateField = (field:keyof FormFields,value:string) => {
    setFields(previous => ({...previous,[field]:value}));
    if (status !== "sending") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleFileChange = (event:ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setCvFile(null);
      event.target.value = "";
      setStatus("error");
      setFeedback("Please select a PDF document.");
      return;
    }

    if (file.size === 0 || file.size > MAX_CV_BYTES) {
      setCvFile(null);
      event.target.value = "";
      setStatus("error");
      setFeedback("Your PDF must be no larger than 5 MB.");
      return;
    }

    setCvFile(file);
    setStatus("idle");
    setFeedback("");
  };

  const removeFile = () => {
    setCvFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") return;

    if (!cvFile) {
      setStatus("error");
      setFeedback("Please attach your CV in PDF format.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    const payload = new FormData();
    payload.append("name",fields.name.trim());
    payload.append("email",fields.email.trim());
    payload.append("position",fields.position.trim());
    payload.append("coverLetter",fields.coverLetter.trim());
    payload.append("website",fields.website);
    payload.append("cv",cvFile);

    try {
      const response = await fetch("/careers-apply.php",{
        method:"POST",
        body:payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to submit application. Please try again.");
      }

      setStatus("success");
      setFeedback("Your application has been submitted successfully.");
      setFields({
        name:"",
        email:"",
        position:selectedPosition,
        coverLetter:"",
        website:"",
      });
      removeFile();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to submit application. Please try again."
      );
    }
  };

  const fileSize = cvFile ? `${(cvFile.size / (1024 * 1024)).toFixed(2)} MB` : "";

  return (
    <section className="career-application" id="career-application">
      <div className="career-application-container">
        <header className="career-application-heading">
          <h2>Apply Now</h2>
          <p>
            Take the next step in your career. Complete the form below
            and submit your CV for consideration.
          </p>
        </header>

        <div className="career-application-layout">
          <form className="career-application-form" onSubmit={handleSubmit}>
            <div className="career-application-fields">
              <div className="career-application-field">
                <label htmlFor="career-app-name">Your name <span>*</span></label>
                <input
                  id="career-app-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={120}
                  required
                  value={fields.name}
                  onChange={event => updateField("name",event.target.value)}
                />
              </div>

              <div className="career-application-field">
                <label htmlFor="career-app-email">Email address <span>*</span></label>
                <input
                  id="career-app-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  maxLength={254}
                  required
                  value={fields.email}
                  onChange={event => updateField("email",event.target.value)}
                />
              </div>

              <div className="career-application-field full-width">
                <label htmlFor="career-position-input">Subject / Position applied for <span>*</span></label>
                <input
                  id="career-position-input"
                  name="position"
                  type="text"
                  placeholder="Position you're applying for (e.g. Security Officer)"
                  maxLength={140}
                  required
                  value={fields.position}
                  onChange={event => updateField("position",event.target.value)}
                />
              </div>

              <div className="career-application-field full-width">
                <label htmlFor="career-app-letter">
                  Cover letter <span className="career-optional">(Optional)</span>
                </label>
                <textarea
                  id="career-app-letter"
                  name="coverLetter"
                  rows={6}
                  maxLength={5000}
                  placeholder="Tell us briefly about yourself, your experience and why you'd like to join Octagon Force..."
                  value={fields.coverLetter}
                  onChange={event => updateField("coverLetter",event.target.value)}
                />
              </div>

              <div className="career-application-field full-width">
                <label htmlFor="career-cv-input">Upload your CV <span>*</span></label>
                <label className="career-cv-dropzone" htmlFor="career-cv-input">
                  <UploadCloud size={28} strokeWidth={1.5} />
                  <strong>{cvFile ? "Replace your CV" : "Choose your CV"}</strong>
                  <small>PDF only · Maximum file size 5 MB</small>
                  <input
                    ref={fileInputRef}
                    id="career-cv-input"
                    name="cv"
                    type="file"
                    accept=".pdf,application/pdf"
                    required
                    onChange={handleFileChange}
                  />
                </label>

                {cvFile && (
                  <div className="career-cv-selected">
                    <a
                      className="career-cv-thumbnail"
                      href={previewUrl || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open uploaded CV ${cvFile.name} in a new tab`}
                      title="Open uploaded CV"
                    >
                      <FileText size={24} aria-hidden="true" />
                    </a>
                    <div>
                      <strong title={cvFile.name}>{cvFile.name}</strong>
                      <span>{fileSize} · PDF selected</span>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      aria-label="Remove selected CV"
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="career-form-honeypot" aria-hidden="true">
              <label htmlFor="career-app-website">Website</label>
              <input
                id="career-app-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={fields.website}
                onChange={event => updateField("website",event.target.value)}
              />
            </div>

            <div className="career-application-bottom">
              <p>Your information and CV will be used to review your application.</p>
              <button
                className="career-application-submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Submitting..." : "Submit application"}
                <ArrowRight size={18} />
              </button>
            </div>

            {feedback && (
              <div
                className={`career-form-feedback ${status}`}
                role={status === "error" ? "alert" : "status"}
              >
                {status === "success" && <CheckCircle2 size={18} />}
                <span>{feedback}</span>
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
