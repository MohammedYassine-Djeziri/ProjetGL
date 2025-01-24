import {
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { useRef } from "react";

export default function DeletePop({ pfp }) {
  const onCloseRef = useRef(null);

  const submit = async () => console.log("submitting");

  return (
    <ModalContent className="bg-red-500 border-green-500 border-8">
      {(onClose) => {
        onCloseRef.current = onClose;
        return (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex flex-col items-center">
              <p className="text-xl rounded-2xl font-semibold bg-secondary px-6 py-2">
                vous etes sure de la suprission ?
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button
                className="bg-black text-white font-semibold"
                onClick={submit}
                radius="lg"
                // isLoading={uploading}
                // isDisabled={!ableToUpload}
              >
                oui
              </Button>
              <Button
                className="bg-blue-500 text-white font-semibold"
                variant="flat"
                radius="lg"
                onPress={onClose}
              >
                non
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}
