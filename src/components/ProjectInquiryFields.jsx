import React from 'react';
import { Paperclip } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png', 'webp', 'heic', 'heif'];

const propertyOptions = [
  ['owner', 'I own the property'],
  ['tenant', 'I lease the property'],
  ['under_contract', 'I am under contract to purchase'],
  ['permission_pending', 'I need property-owner approval'],
  ['searching', 'I am still looking for a property'],
];

const plansOptions = [
  ['permit_ready', 'Yes, permit-ready plans'],
  ['draft_plans', 'Yes, concept or draft plans'],
  ['in_progress', 'Plans are being prepared'],
  ['need_plans', 'No, I need help with plans'],
  ['not_sure', 'Not sure what is required'],
];

const budgetOptions = [
  ['under_50k', 'Under $50,000'],
  ['50k_100k', '$50,000 - $100,000'],
  ['100k_250k', '$100,000 - $250,000'],
  ['250k_500k', '$250,000 - $500,000'],
  ['500k_plus', '$500,000+'],
  ['not_sure', 'Not sure yet'],
];

const timelineOptions = [
  ['asap', 'As soon as possible'],
  ['1_3_months', 'Within 1-3 months'],
  ['3_6_months', 'Within 3-6 months'],
  ['6_12_months', 'Within 6-12 months'],
  ['planning', 'Researching or planning'],
  ['flexible', 'Flexible'],
];

const optionGroups = {
  property_status: propertyOptions,
  plans_status: plansOptions,
  budget_range: budgetOptions,
  timeline: timelineOptions,
};

function optionLabel(field, value) {
  return optionGroups[field]?.find(([optionValue]) => optionValue === value)?.[1] || 'Not provided';
}

function projectTypeLabel(value) {
  if (!value) return 'Not provided';
  return value.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function buildProjectSummary(formData, attachmentName = '') {
  return [
    `Project type: ${projectTypeLabel(formData.project_type)}`,
    `Project address: ${formData.project_address || 'Not provided'}`,
    `County: ${formData.county || 'Not provided'}`,
    `Property status: ${optionLabel('property_status', formData.property_status)}`,
    `Plans: ${optionLabel('plans_status', formData.plans_status)}`,
    `Budget: ${optionLabel('budget_range', formData.budget_range)}`,
    `Target timeline: ${optionLabel('timeline', formData.timeline)}`,
    `Attachment selected: ${attachmentName || 'None'}`,
    '',
    'Project notes:',
    formData.message || 'Not provided',
  ].join('\n');
}

function SelectField({ id, label, field, value, options, setFormData }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <input type="hidden" name={field} value={value} />
      <Select value={value} onValueChange={(nextValue) => setFormData((current) => ({ ...current, [field]: nextValue }))}>
        <SelectTrigger id={id} className="h-12 bg-white border-slate-200">
          <SelectValue placeholder="Select one" />
        </SelectTrigger>
        <SelectContent>
          {options.map(([optionValue, optionText]) => (
            <SelectItem key={optionValue} value={optionValue}>{optionText}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default function ProjectInquiryFields({ idPrefix, formData, setFormData, attachment, setAttachment }) {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      setAttachment({ name: '', error: '' });
      return;
    }

    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      event.target.value = '';
      setAttachment({ name: '', error: 'Please attach a PDF, JPG, PNG, WebP, HEIC, or HEIF file.' });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      event.target.value = '';
      setAttachment({ name: '', error: 'Please choose a file that is 5 MB or smaller.' });
      return;
    }

    setAttachment({ name: file.name, error: '' });
  };

  return (
    <fieldset className="border-t border-slate-200 pt-5 space-y-5">
      <legend className="text-base font-semibold text-slate-900 pr-3">Project readiness</legend>
      <p className="text-sm text-slate-500 -mt-2">
        Share what you know today. “Not sure” is completely fine and helps us plan the next conversation.
      </p>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-project-address`}>Project Address</Label>
        <Input
          id={`${idPrefix}-project-address`}
          name="project_address"
          value={formData.project_address}
          onChange={(event) => setFormData((current) => ({ ...current, project_address: event.target.value }))}
          placeholder="Street address or city"
          className="h-12 bg-white border-slate-200"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField id={`${idPrefix}-property-status`} label="Property Status" field="property_status" value={formData.property_status} options={propertyOptions} setFormData={setFormData} />
        <SelectField id={`${idPrefix}-plans-status`} label="Do You Have Plans?" field="plans_status" value={formData.plans_status} options={plansOptions} setFormData={setFormData} />
        <SelectField id={`${idPrefix}-budget-range`} label="Estimated Budget" field="budget_range" value={formData.budget_range} options={budgetOptions} setFormData={setFormData} />
        <SelectField id={`${idPrefix}-timeline`} label="Target Timeline" field="timeline" value={formData.timeline} options={timelineOptions} setFormData={setFormData} />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-message`}>Project Details</Label>
        <Textarea
          id={`${idPrefix}-message`}
          name="project_notes"
          value={formData.message}
          onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
          placeholder="Describe the property, desired work, current conditions, and anything else we should know."
          rows={4}
          className="resize-none bg-white border-slate-200"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-attachment`} className="flex items-center gap-2">
          <Paperclip className="w-4 h-4" /> Attach Plans, Photos, or Scope
        </Label>
        <Input
          id={`${idPrefix}-attachment`}
          type="file"
          name="project_attachment"
          accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
          onChange={handleFileChange}
          aria-describedby={`${idPrefix}-attachment-help`}
          className="h-14 bg-white border-slate-300 p-1.5 text-slate-600 file:mr-4 file:h-10 file:cursor-pointer file:rounded-md file:bg-orange-500 file:px-4 file:font-semibold file:text-white hover:file:bg-orange-600 focus-visible:ring-2 focus-visible:ring-orange-500"
        />
        <p id={`${idPrefix}-attachment-help`} className={`text-xs ${attachment.error ? 'text-red-600' : 'text-slate-500'}`} role={attachment.error ? 'alert' : undefined}>
          {attachment.error || 'Optional. Upload one PDF or image up to 5 MB.'}
        </p>
      </div>
    </fieldset>
  );
}
