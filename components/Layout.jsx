export default function Layout(props) {
  return (
    <main className="grid grid-cols-1 m-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-3 lg:px-10 lg:m-4">
      {props.children}
    </main>
  );
}
