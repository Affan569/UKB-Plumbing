import React from "react";
import { getUniqueContentForTown, isBatch1Town, type UniqueContent } from "@/utils/metadataHelpers";

interface Batch1UniqueContentProps {
  areaSlug: string;
  serviceName: string;
}

export default function Batch1UniqueContent({ areaSlug, serviceName }: Batch1UniqueContentProps) {
  if (!isBatch1Town(areaSlug)) {
    return null;
  }

  const uniqueContent = getUniqueContentForTown(areaSlug);
  if (!uniqueContent) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 md:p-8 mb-8 border border-blue-100">
      <h3 className="text-xl font-bold text-ukb-darkblue mb-4">About {areaSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
      
      {/* Local Landmark Section */}
      <div className="mb-6">
        <h4 className="font-semibold text-ukb-blue mb-2">Local Area Knowledge</h4>
        <p className="text-sm text-ukb-darkgray leading-relaxed">
          {uniqueContent.landmarkDescription}
        </p>
      </div>

      {/* Response Time Section */}
      <div className="mb-6">
        <h4 className="font-semibold text-ukb-blue mb-2">Local Response Time</h4>
        <p className="text-sm text-ukb-darkgray">
          {uniqueContent.responseTime}
        </p>
      </div>

      {/* Photo Placeholder Section */}
      <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="font-semibold text-ukb-blue">Local Project Photo</h4>
        </div>
        <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
          <p className="text-xs text-slate-500 text-center px-4">
            {uniqueContent.photoAlt}
          </p>
        </div>
      </div>
    </div>
  );
}
