import mongoose, { Schema, Document } from 'mongoose';

export interface QualificationDocument extends Document {
  leadEmail: string;
  answers: Record<string, string | number | boolean>;
  score: number;
  createdAt: Date;
}

const QualificationSchema = new Schema<QualificationDocument>(
  {
    leadEmail: { type: String, required: true, index: true },
    answers: { type: Object, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<QualificationDocument>('Qualification', QualificationSchema);
