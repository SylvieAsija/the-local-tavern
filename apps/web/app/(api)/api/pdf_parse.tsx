'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const PdfUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fields, setFields] = useState<any>(null);

  const extractFormFields = async (pdfFile: File) => {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const form = pdfDoc.getForm();

    // Extract the CharacterName field from the PDF form
    const characterName = form.getTextField('CharacterName').getText();

    // Extract the ClassLevel field from the PDF form
    const classLevel = form.getTextField('ClassLevel').getText();

    // Extract the Background field from the PDF form
    const background = form.getTextField('Background').getText();

    // Extract the PlayerName field from the PDF form
    const playerName = form.getTextField('PlayerName').getText();

    // Extract the Race field from the PDF form
    const race = form.getTextField('Race ').getText();

    // Extract the Alignment field from the PDF form
    const alignment = form.getTextField('Alignment').getText();

    // Extract the XP field from the PDF form
    const xp = form.getTextField('XP').getText();

    setFields({
      CharacterName: characterName,
      ClassLevel: classLevel,
      Background: background,
      PlayerName: playerName,
      Race: race,
      Alignment: alignment,
      XP: xp,
    });
    //ClassLevel
    //Background
    //PlayerName
    //Race
    //Alignment
    //XP

    //    setFields({ CharacterName: characterName });
  };

  return (
    <div>
      <input
        type='file'
        accept='application/pdf'
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) setFile(f);
        }}
      />
      <button onClick={() => file && extractFormFields(file)}>
        Extract CharacterName
      </button>

      {fields && (
        <div>
          <h3>Parsed Fields:</h3>
          <ul>
            {Object.entries(fields).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {String(value)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PdfUploader;
