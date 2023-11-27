'use client';
import React from 'react';
import { useDiscoDisclosure } from '@discoxyz/selective-disclosure/dist/useDisclosure';

export default function DisclosureComponent() {
    const requestShapeGms = {
        sdRequest: {
          'AND': [
              {
                  schema: ["GmCredential"],
                  count: 3
              }
          ]
        },
        org: {
          name: "Disco Demo",
          url: "htts://app.disco.xyz",
          logo: "https://pbs.twimg.com/profile_images/1544599788464766976/Ib49kkdh_400x400.jpg"
        }
      };
  const { requestAsync } = useDiscoDisclosure();

  const handleRequest = async (requestShape: any) => {
    const result = await requestAsync(requestShape);
    console.log(result); // Handle the result
  };

  return (
    <div>
      <button onClick={() => handleRequest(requestShapeGms)}>Open Disclosure Modal</button>
    </div>
  );
}
