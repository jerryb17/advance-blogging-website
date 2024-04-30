export default function FormGroup({ children, errorMessage }) {
  return (
    <div className={`form-group ${errorMessage != null ? "error" : ""}`}>
      {children}
      {errorMessage != null && <div className="error-message">Required</div>}
    </div>
  );
}
