import Logo from "@/components/logo";

const ClerkLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-4">
      <Logo />
      {children}
    </div>
  );
};

export default ClerkLayout;