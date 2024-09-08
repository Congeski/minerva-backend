/*
  Warnings:

  - You are about to drop the `secretario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "secretario";

-- CreateTable
CREATE TABLE "secretary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "secretary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inspector" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inspector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enterprise" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "enterprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_order" (
    "id" TEXT NOT NULL,
    "scheduledDate" TIMESTAMP(3),
    "thirdParty" TEXT,
    "totalCost" DOUBLE PRECISION,

    CONSTRAINT "service_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inspection_report" (
    "id" TEXT NOT NULL,
    "service_order_id" TEXT NOT NULL,
    "inspector_id" TEXT NOT NULL,
    "completionDate" TIMESTAMP(3),

    CONSTRAINT "inspection_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inspection_order" (
    "id" TEXT NOT NULL,
    "inspection_report_id" TEXT NOT NULL,
    "scheduledDate" TIMESTAMP(3),

    CONSTRAINT "inspection_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" TEXT NOT NULL,
    "enterprise_id" TEXT NOT NULL,
    "secretary_id" TEXT NOT NULL,
    "inspection_order_id" TEXT NOT NULL,
    "openDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secretary_email_key" ON "secretary"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "inspector_email_key" ON "inspector"("email");

-- AddForeignKey
ALTER TABLE "enterprise" ADD CONSTRAINT "enterprise_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inspection_report" ADD CONSTRAINT "inspection_report_service_order_id_fkey" FOREIGN KEY ("service_order_id") REFERENCES "service_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inspection_report" ADD CONSTRAINT "inspection_report_inspector_id_fkey" FOREIGN KEY ("inspector_id") REFERENCES "inspector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inspection_order" ADD CONSTRAINT "inspection_order_inspection_report_id_fkey" FOREIGN KEY ("inspection_report_id") REFERENCES "inspection_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_enterprise_id_fkey" FOREIGN KEY ("enterprise_id") REFERENCES "enterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_secretary_id_fkey" FOREIGN KEY ("secretary_id") REFERENCES "secretary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_inspection_order_id_fkey" FOREIGN KEY ("inspection_order_id") REFERENCES "inspection_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
