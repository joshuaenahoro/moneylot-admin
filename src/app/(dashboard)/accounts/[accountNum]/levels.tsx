'use client';

import { Icon } from '@/components/icon';
import { Level } from './level';
import { Button, buttonVariants } from '@/components/button';
import { PreviewDocument } from './preview-document';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loading } from '@/components/loading';

const level1Meta = [
  { name: 'Full name', value: 'Jim Miller' },
  { name: 'Date of birth', value: '12 Sep 1990' },
  { name: 'Phone number', value: '0812 345 6789' },
  { name: 'Email address', value: 'jimmiller@realmail.com' },
];

const level2Meta = [
  { name: 'Next of kin', value: 'Jade Miller' },
  { name: 'NOK relationship', value: 'Brother' },
  { name: 'NOK number', value: '0812 345 6789' },
];

const level3Meta = [
  { name: 'Employer', value: 'MAX Industries Inc' },
  { name: 'Employer number', value: '0812 345 6789' },
  { name: 'Employer email address', value: 'info@maxindustries.com' },
];

const level3Meta2 = [
  { name: 'Country', value: 'Nigeria' },
  { name: 'City', value: 'Lagos' },
  {
    name: "Employer's address",
    value: 'No 1 Lekki Phase 1, off Admiralty way',
  },
];

export function Levels() {
  const [statuses, setStatuses] = useState({
    1: 'Unprocessed',
    2: 'Unprocessed',
    3: 'Unprocessed',
  });

  const [isKYCActionRunning, setIsKYCActionRunning] = useState(false);

  function handleAcceptAllKYC() {
    setIsKYCActionRunning(true);
    setTimeout(() => {
      setStatuses({
        1: 'Accepted',
        2: 'Accepted',
        3: 'Accepted',
      });
      setIsKYCActionRunning(false);
      toast.success('Levels 1-3 KYC accepted');
    }, 1000);
  }

  function handleRejectAllKYC() {
    setIsKYCActionRunning(true);
    setTimeout(() => {
      setStatuses({
        1: 'Rejected',
        2: 'Rejected',
        3: 'Rejected',
      });
      setIsKYCActionRunning(false);
      toast.success('Levels 1-3 KYC rejected');
    }, 1000);
  }

  // ! Demo purposes
  function handleStatusChange(num: number, value: string) {
    setIsKYCActionRunning(true);
    setTimeout(() => {
      setStatuses({
        ...statuses,
        [num]: value,
      });
      setIsKYCActionRunning(false);
      toast.success(`Level ${num} KYC ${value.toLowerCase()}`);
    }, 1000);
  }

  return (
    <div className="flex flex-col gap-1">
      {isKYCActionRunning && <Loading />}
      <div className="mb-2 flex items-center justify-between rounded-b-xl border-t-2 border-[#EAECF0] bg-white px-10 py-3">
        <h2 className="text-lg font-semibold">KYC Data</h2>
        <div className="flex justify-end gap-4">
          <Button variant="success" onClick={handleAcceptAllKYC}>
            <Icon name="thumbs-up" className="mr-2 h-4 w-4" />
            Accept all KYC
          </Button>
          <Button variant="destructive" onClick={handleRejectAllKYC}>
            <Icon name="thumbs-down" className="mr-2 h-4 w-4" />
            Reject all KYC
          </Button>
        </div>
      </div>

      <Level
        number={1}
        status={statuses[1]}
        onStatusChange={handleStatusChange}
      >
        <div className="mb-8 flex gap-20">
          <MetaData name="BVN" value="104567723345" />
          <DocumentBar />
        </div>
        <Meta data={level1Meta} />
      </Level>

      <Level
        number={2}
        status={statuses[2]}
        onStatusChange={handleStatusChange}
      >
        <div className="mb-8 flex gap-20">
          <MetaData name="NIN" value="104567723345" />
          <DocumentBar />
        </div>
        <Meta data={level2Meta} />
      </Level>

      <Level
        number={3}
        status={statuses[3]}
        onStatusChange={handleStatusChange}
      >
        <div className="mb-8 flex gap-20">
          <Meta data={level3Meta} />
          <DocumentBar />
        </div>
        <Meta data={level3Meta2} />
      </Level>
    </div>
  );
}

function Meta({ data }: { data: { name: string; value: string }[] }) {
  return (
    <div>
      <div className="mb-8 flex items-end gap-20">
        {data.map(({ name, value }) => (
          <MetaData name={name} value={value} key={name} />
        ))}
      </div>
    </div>
  );
}

function MetaData({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col-reverse gap-1 first-of-type:w-[120px]">
      <span className="text-xs text-[#9095A1]">{name}</span>
      <span className="font-medium text-[#0B0E17]">{value}</span>
    </div>
  );
}

function DocumentBar() {
  return (
    <div className="flex h-fit gap-3 self-center rounded-md bg-neutral p-2">
      <span className="flex items-center gap-3 text-xs font-bold">
        <Icon name="image" className="h-10 w-10" />
        Identification
        <a
          href="/demo/passport.png"
          target="_blank"
          download="Amélie Laurent - Identification"
          className={buttonVariants({ variant: 'accent' })}
        >
          <Icon name="download" className="h-6 w-6 text-[#232323]" />
        </a>
      </span>
      <PreviewDocument />
    </div>
  );
}
