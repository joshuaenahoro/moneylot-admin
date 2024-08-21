import { Form } from './form';

export default function LoginPage() {
  return (
    <div className="flex h-full items-end justify-end bg-[linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)),url('/images/auth.jpg')] bg-cover p-[100px]">
      <div className="absolute left-[87px] top-[54px]">
        <Logo />
      </div>
      <div className="h-full w-full max-w-[520px] rounded-3xl bg-white/75 p-11">
        <p className="text-lg">Welcome to Moneylot</p>
        <h1 className="text- mb-16 text-5xl font-medium">Sign in</h1>
        <Form />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={155}
      height={141}
      fill="none"
    >
      <path
        stroke="#fff"
        strokeWidth={3.772}
        d="M4.587 105.378V35.596l32.062 32.062M92.597 81.489V11.706L60.534 43.77"
      />
      <path
        stroke="#fff"
        strokeWidth={3.772}
        d="M2.071 1.648 95.115 104.75h57.838"
      />
      <path
        fill="#fff"
        d="M2.232 136.352v-10.561h1.614l4.617 7.71h-.845l4.542-7.71h1.614l.015 10.561h-1.856l-.015-7.649h.393l-3.863 6.442h-.875l-3.923-6.442h.453v7.649H2.232Zm28.412.151a6.19 6.19 0 0 1-2.278-.407 5.579 5.579 0 0 1-1.811-1.132 5.222 5.222 0 0 1-1.192-1.72 5.506 5.506 0 0 1-.422-2.172c0-.785.14-1.504.422-2.158a5.033 5.033 0 0 1 1.192-1.72 5.452 5.452 0 0 1 1.81-1.147 6.169 6.169 0 0 1 2.264-.407c.825 0 1.579.136 2.263.407a5.452 5.452 0 0 1 1.81 1.147c.514.483.91 1.056 1.193 1.72.281.654.422 1.373.422 2.158 0 .784-.14 1.508-.422 2.172a5.022 5.022 0 0 1-1.192 1.72 5.579 5.579 0 0 1-1.811 1.132 6.03 6.03 0 0 1-2.248.407Zm-.015-1.72c.533 0 1.026-.09 1.478-.271a3.46 3.46 0 0 0 1.177-.77 3.797 3.797 0 0 0 1.056-2.67c0-.544-.095-1.036-.286-1.479a3.461 3.461 0 0 0-.77-1.177 3.354 3.354 0 0 0-1.177-.784 3.946 3.946 0 0 0-1.478-.272c-.533 0-1.026.091-1.479.272a3.549 3.549 0 0 0-1.177.784 3.652 3.652 0 0 0-.784 1.177 3.871 3.871 0 0 0-.272 1.479c0 .533.09 1.026.272 1.478.19.453.452.85.784 1.192.332.332.725.589 1.177.77.453.181.946.271 1.479.271Zm16.82 1.569v-10.561h1.614l6.624 8.132h-.8v-8.132h1.947v10.561h-1.615l-6.623-8.132h.8v8.132h-1.947Zm23.078-6.171h5.251v1.615h-5.25v-1.615Zm.151 4.527h5.96v1.644h-7.921v-10.561h7.71v1.644h-5.749v7.273Zm19.677 1.644v-4.179l.437 1.207-4.587-7.589h2.098l3.681 6.11h-1.177l3.712-6.11h1.931l-4.586 7.589.452-1.207v4.179h-1.961Zm16.3 0v-10.561h1.962v8.902h5.522v1.659h-7.484Zm22.843.151a6.194 6.194 0 0 1-2.279-.407 5.577 5.577 0 0 1-1.81-1.132 5.212 5.212 0 0 1-1.192-1.72 5.499 5.499 0 0 1-.423-2.172c0-.785.141-1.504.423-2.158a5.024 5.024 0 0 1 1.192-1.72 5.45 5.45 0 0 1 1.81-1.147 6.172 6.172 0 0 1 2.264-.407c.824 0 1.579.136 2.263.407a5.45 5.45 0 0 1 1.81 1.147 5.024 5.024 0 0 1 1.192 1.72c.282.654.423 1.373.423 2.158 0 .784-.141 1.508-.423 2.172a5.014 5.014 0 0 1-1.192 1.72 5.577 5.577 0 0 1-1.81 1.132 6.033 6.033 0 0 1-2.248.407Zm-.015-1.72c.533 0 1.025-.09 1.478-.271a3.46 3.46 0 0 0 1.177-.77 3.68 3.68 0 0 0 .77-1.177c.191-.452.286-.95.286-1.493 0-.544-.095-1.036-.286-1.479a3.474 3.474 0 0 0-.77-1.177 3.353 3.353 0 0 0-1.177-.784 3.945 3.945 0 0 0-1.478-.272c-.534 0-1.026.091-1.479.272a3.545 3.545 0 0 0-1.177.784 3.668 3.668 0 0 0-.785 1.177 3.873 3.873 0 0 0-.271 1.479c0 .533.09 1.026.271 1.478.192.453.453.85.785 1.192a3.46 3.46 0 0 0 1.177.77c.453.181.945.271 1.479.271Zm18.815 1.569v-8.901h-3.501v-1.66h8.963v1.66h-3.501v8.901h-1.961Z"
      />
    </svg>
  );
}
