import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { Details, DetailsContent, Summary } from './details';

export const metadata: Metadata = {
  title: `Account - ${SITE_NAME}`,
  description: '',
};

export default function AccountPage() {
  return (
    <div>
      <Header />
      <div className="h-2" />
      <div className="flex flex-col gap-1">
        <Details>
          <Summary>Level 1</Summary>
          <DetailsContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex
            commodi, expedita perspiciatis cumque, ipsum dolor accusantium
            nostrum optio repellat ut laboriosam voluptas eius maxime nesciunt
            tempora enim, aperiam aut.
          </DetailsContent>
        </Details>

        <Details>
          <Summary>Level 2</Summary>
          <DetailsContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex
            commodi, expedita perspiciatis cumque, ipsum dolor accusantium
            nostrum optio repellat ut laboriosam voluptas eius maxime nesciunt
            tempora enim, aperiam aut.
          </DetailsContent>
        </Details>

        <Details>
          <Summary>Level 3</Summary>
          <DetailsContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex
            commodi, expedita perspiciatis cumque, ipsum dolor accusantium
            nostrum optio repellat ut laboriosam voluptas eius maxime nesciunt
            tempora enim, aperiam aut.
          </DetailsContent>
        </Details>
      </div>
    </div>
  );
}
