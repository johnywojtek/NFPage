import React from "react"

import { MdPrint, MdEmail, MdFileDownload } from "react-icons/md"
import pdf from "../../files/Download.pdf"

const KrsBtns = () => (
    <>
        <a href="mailto:?subject=Wesprzyj Neurona&body=Przekaż 1% - KRS 0000755464%0D%0AFundacja NeuroN na rzecz osób z zaburzeniami funkcjonowania mózgu i wspierania osób młodych w budowaniu projektów społecznych i startupowych.%0D%0A%0D%0AWażne! Poinformuj Księgową o swojej decyzji lub samodzielnie wpisz nr KRS do Deklaracji PIT.%0D%0A%0D%0AAby przekazać 1%, wystarczy podać w deklaracji podatkowej PIT nasz numer KRS: 0000318482 (służy do tego specjalna rubryka), a w miejscu wnioskowanej kwoty wpisać kwotę będącą 1% podatku zaokrągloną w dół do pełnych dziesiątek.%0D%0A%0D%0ADołącz do tego grona – dowiedz się więcej:%0D%0Ahttps://neuronfoundation.com">
            <MdEmail />
        </a>

        <a href={pdf} download>
            <MdFileDownload />
        </a>
        <iframe
            name="printer_frame"
            id="printer_frame"
            src={pdf}
            style={{ display: "none" }}
        ></iframe>
        <MdPrint
            onClick={() => {
                const pdfFrame = window.frames["printer_frame"]

                pdfFrame.focus()
                pdfFrame.print()
            }}
        />
    </>
)

export default KrsBtns
