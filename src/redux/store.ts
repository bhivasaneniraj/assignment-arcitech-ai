// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import CategoryDistributionSlice from './CategoryDistribution';
import ResponseTimesSlice from './ResponseTimesSlice';
import UserSatisfactionSlice from './UserSatisfactionSlice';
import UsageStatisticsSlice from './UsageStatisticsSlice';
import InsightSummarySlice from './InsightSummary'

// Create the store
const store = configureStore({
  reducer: {
    CategoryDistribution: CategoryDistributionSlice,
    ResponseTimes: ResponseTimesSlice,
    UserSatisfaction: UserSatisfactionSlice,
    UsageStatistics: UsageStatisticsSlice,
    InsightSummary: InsightSummarySlice, 

  },
});

// Define the RootState type based on the store's shape
export type RootState = ReturnType<typeof store.getState>;

// Export the store
export default store;
