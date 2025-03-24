-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasketDevice" (
    "in" SERIAL NOT NULL,
    "basketId" INTEGER,
    "deviceId" INTEGER,

    CONSTRAINT "BasketDevice_pkey" PRIMARY KEY ("in")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "rate" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "deviceId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "img" TEXT NOT NULL,
    "brandId" INTEGER,
    "typeId" INTEGER,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "deviceId" INTEGER,

    CONSTRAINT "DeviceInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandType" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "BrandType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BrandToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BrandToType_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Basket_userId_key" ON "Basket"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Device_name_key" ON "Device"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BrandType_typeId_brandId_key" ON "BrandType"("typeId", "brandId");

-- CreateIndex
CREATE INDEX "_BrandToType_B_index" ON "_BrandToType"("B");

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketDevice" ADD CONSTRAINT "BasketDevice_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "Basket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketDevice" ADD CONSTRAINT "BasketDevice_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceInfo" ADD CONSTRAINT "DeviceInfo_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandType" ADD CONSTRAINT "BrandType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandType" ADD CONSTRAINT "BrandType_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToType" ADD CONSTRAINT "_BrandToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToType" ADD CONSTRAINT "_BrandToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
