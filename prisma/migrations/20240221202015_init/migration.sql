-- CreateTable
CREATE TABLE "UserCalorie" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UserCalorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWeight" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UserWeight_pkey" PRIMARY KEY ("id")
);
