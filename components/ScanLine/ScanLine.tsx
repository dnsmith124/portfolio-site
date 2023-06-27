interface ScanLineProps {

}

const ScanLine: React.FC<ScanLineProps> = () => {

    return (
      <div className="absolute bg-scanline top-0 left-0 bottom-0 right-0 w-full h-10 z-10 blur-xl pointer-events-none animate-scanline "></div>
    )
}

export default ScanLine;
