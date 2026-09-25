import React, { useRef, useState } from 'react';
import {
  CheckCircle2,
  FileCheck,
  FileText,
  Paperclip,
  Trash2,
  UploadCloud,
} from 'lucide-react';
import { AttachedDoc } from '../types';

interface DocumentUploaderProps {
  id: string;
  label?: string;
  title?: string;
  sublabel?: string;
  description?: string;
  accept?: string;
  required?: boolean;
  doc?: AttachedDoc;
  value?: AttachedDoc;
  onChange: (doc: AttachedDoc | undefined) => void;
}

export const DocumentUploader: React.FC<DocumentUploaderProps> = ({
  id,
  label,
  title,
  sublabel,
  description,
  accept = '.pdf,.jpg,.jpeg,.png',
  required = false,
  doc,
  value,
  onChange,
}) => {
  const activeDoc = doc || value;
  const displayTitle = label || title || '';
  const displayDescription = sublabel || description || '';

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;

      onChange({
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        dataUrl,
        uploadedAt: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatSize = (bytes?: number) => {
    if (!bytes) return '';
    if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${Math.round(bytes / 1024)} KB`;
  };

  return (
    <div className="rounded-[22px] bg-[#F2F2F7]/80 p-4 border border-black/[0.04] transition-all">
      <div className="flex items-start justify-between gap-2 mb-2.5">
        <div>
          <label htmlFor={id} className="text-xs sm:text-sm font-semibold text-[#1C1C1E] flex items-center gap-1">
            <span>{displayTitle}</span>
            {required ? (
              <span className="text-[#FF3B30] text-xs font-bold">*</span>
            ) : (
              <span className="text-[#8E8E93] text-[11px] font-normal">(ถ้ามี)</span>
            )}
          </label>
          {displayDescription && (
            <p className="text-[11px] text-[#8E8E93] mt-0.5">{displayDescription}</p>
          )}
        </div>

        {activeDoc && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#34C759]/15 text-[#248A3D] shrink-0">
            <CheckCircle2 className="w-3 h-3 text-[#34C759]" />
            <span>อัปโหลดแล้ว</span>
          </span>
        )}
      </div>

      <input
        ref={fileInputRef}
        id={id}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {activeDoc ? (
        <div className="flex items-center justify-between p-3 bg-white rounded-[16px] border border-black/[0.05] shadow-xs">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-[12px] bg-[#007AFF]/12 text-[#007AFF] flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#1C1C1E] truncate max-w-[200px] sm:max-w-xs">
                {activeDoc.fileName}
              </p>
              <p className="text-[11px] text-[#8E8E93]">
                {formatSize(activeDoc.fileSize)} • อัปโหลดเมื่อ {activeDoc.uploadedAt}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="p-1.5 text-[#8E8E93] hover:text-[#FF3B30] hover:bg-[#FF3B30]/10 rounded-full transition-colors"
            title="ลบไฟล์"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`cursor-pointer rounded-[16px] border-2 border-dashed p-4 text-center transition-all bg-white ${
            isDragging
              ? 'border-[#007AFF] bg-[#007AFF]/5'
              : 'border-[#C7C7CC] hover:border-[#007AFF] hover:bg-[#007AFF]/[0.02]'
          }`}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 rounded-full bg-[#767680]/10 text-[#007AFF] flex items-center justify-center">
              <UploadCloud className="w-4 h-4" />
            </div>
            <p className="text-xs font-medium text-[#1C1C1E]">
              คลิกเพื่อเลือกไฟล์ หรือลากไฟล์มาวางที่นี่
            </p>
            <p className="text-[10px] text-[#8E8E93]">
              รองรับไฟล์ PDF, JPG, PNG ขนาดไม่เกิน 10MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
