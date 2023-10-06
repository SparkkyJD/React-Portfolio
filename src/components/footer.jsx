'use client';

import { Footer } from 'flowbite-react';

export default function DefaultFooter() {
  return (
    <Footer container className="mt-20 border-t border-blue-500 bg-gray-200">
      <Footer.Copyright
        by="Portfolio of Eric Wagner"
        year={2023}
      />
      <Footer.LinkGroup >
        <Footer.Link href="#">
          Back to top^
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}


