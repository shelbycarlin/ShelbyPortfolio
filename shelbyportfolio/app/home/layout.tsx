export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
  
         <h1>S.C.</h1>
        {children}
        
    </>
  )
}