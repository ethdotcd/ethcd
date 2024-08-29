import Link from "next/link";
import { useCallback, useEffect } from "react";
import SVG from "react-inlinesvg";
import useModal, { ModalType } from "../hooks/useModal";
import Modal from "../modal/Modal";

export default function ProfileFooter({openModal}) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openModal(ModalType.search, {});
    }
  }, [openModal]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSearchClick = useCallback(() => openModal(ModalType.search, {}), [openModal]);

  return (
    <>
      
    </>
  );
}
