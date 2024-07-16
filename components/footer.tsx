
export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} RidePanda. All rights reserved.
        </span>
      </div>
    </footer>
  );
}