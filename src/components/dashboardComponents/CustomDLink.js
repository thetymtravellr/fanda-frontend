import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomDLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
      <Link
        to={to}
        className={`${match ? 'bg-black/10' : ""} w-full h-full duration-200 rounded-xl mb-4`}
      >
        {children}
      </Link>
  );
}

export default CustomDLink