import mongoose, { Schema, Document } from 'mongoose';

export interface LeadDocument extends Document {
  fullName: string;
  email: string;
  companyName?: string;
  serviceInterest: 'fractional_cfo' | 'controller' | 'bookkeeping' | 'accounting_clerk';
  companySize?: string;
  numEmployees?: number;
  createdAt: Date;
}

const LeadSchema = new Schema<LeadDocument>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, index: true },
    companyName: { type: String },
    serviceInterest: {
      type: String,
      required: true,
      enum: ['fractional_cfo', 'controller', 'bookkeeping', 'accounting_clerk'],
    },
    companySize: { type: String },
    numEmployees: { type: Number },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<LeadDocument>('Lead', LeadSchema);
