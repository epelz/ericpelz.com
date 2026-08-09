export const siteTitle = "Eric Pelz";

export default function Header({ home = false }: { home?: boolean }) {
  return (
    <header>
      <h1 className="text-5xl font-semibold my-4 pb-1 border-b-2 border-b-gray-100">
        {home ? (
          siteTitle
        ) : (
          <a className="text-inherit" href="/">
            {siteTitle}
          </a>
        )}
      </h1>
    </header>
  );
}
