//Business header with icon and name in the middle
// links underneath
export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Logo"
          className="h-12 w-12"
        />
        <h1 className="text-2xl font-bold ml-2">Bertemes Johnson & Co</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
  )
}
