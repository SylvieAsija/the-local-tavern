import { Button } from '@workspace/ui/components/button';
import PdfUploader from './(api)/api/pdf_parse';

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-svh'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <PdfUploader />
      </div>
    </div>
  );
}
