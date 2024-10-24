export default function Footer() {
  return (
    <footer className="bg-secondaryBg text-primaryText py-4 mt-auto">
      <div className="container text-center">
        <h4 className="text-sm text-accent font-semibold opacity-70">
          {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  );
}
