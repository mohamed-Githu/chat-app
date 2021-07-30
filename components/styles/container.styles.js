const Container = ({ children, className }) => (
  <div className={`${className} w-full max-w-6xl mx-auto`}>{children}</div>
);

export default Container;
