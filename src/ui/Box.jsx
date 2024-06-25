export default function Box({ children }) {
  return <div className="flex flex-wrap gap-3">{children}</div>;
}

export function Label({ children, bold, lighter }) {
  return (
    <h3
      className={`sm:text-md text-sm capitalize text-very-dark-blue-text ${
        bold ? "font-600" : "font-300"
      } ${lighter ? "dark:text-white/90" : "dark:text-white"}`}
    >
      {children}
    </h3>
  );
}
