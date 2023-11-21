export default function Alert({ message }) {
    return (
      <div
        className="alert alert-danger alert-dismissible fade show w-100 text-break"
        role="alert"
      >
        <p className="text-center fs-6">{message} </p>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
}
