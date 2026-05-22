type PageHeadingProps = {
  children: React.ReactNode;
};

export const PageHeading = ({ children }: PageHeadingProps) => {
  return (
    <h1 className='mt-4 mb-8 text-display text-balance'>{children}</h1>
  );
};
