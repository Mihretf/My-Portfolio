export default function RuggedButton({ text }: { text: string }) {
  return (
    <button className="rugged-border bg-abyssinian-gold px-6 py-2 font-pixel text-xl text-black 
      hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-75 active:bg-yellow-600">
      {text}
    </button>
  );
}