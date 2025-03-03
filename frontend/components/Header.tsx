import Image from 'next/image';

export default function Header() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600"><Image src="https://deepthought.education/assets/images/logo/logo.svg" alt="DeepThought Logo" width={150} height={40} /></h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Task
        </button>
      </header>
    </div>
  );
}
