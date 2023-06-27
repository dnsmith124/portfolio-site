interface ScanLineProps {

}

const ScanLine: React.FC<ScanLineProps> = () => {

    return (
      <div className="absolute bg-scanline top-0 left-0 bottom-0 right-0 w-scanline h-10 z-20 blur-xl pointer-events-none -rotate-45 origin-top-left animate-scanline "></div>
    )
}

export default ScanLine;
