const Social = ({ children, href, icon }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="social-color px-6 py-2 inline-flex items-center gap-3 rounded-md transition-all"
      >
        {icon}
        {children}
      </a>
    </div>
  )
}

export default Social
