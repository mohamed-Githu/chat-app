const variants = {
  headline: "font-poppins font-semibold headline text-white sm:text-6xl",
  title: "font-poppins font-semibold text-5xl",
  header: "font-roboto text-2xl text-primary opacity-80",
  subtitle: "font-roboto font-normal text-2xl opacity-70 text-white sm:text-xl",
  paragraph: "font-roboto text-2xl opacity-80 text-primary sm:text-xl",
  link: "font-roboto text-lg text-white opacity-70 cursor-pointer hover:opacity-100 duration-200",
  "footer-link": "font-roboto text-lg text-primary opacity-80",
};

const Typography = ({ variant, children, className, ...props }) => (
  <p className={`${variants[variant]} ${className}`} {...props}>
    {children}
  </p>
);

export default Typography;
