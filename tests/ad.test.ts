import { AdRecord } from "../records/ad.records";
import { AdEntity } from "../types";
import { pool } from "../utils/db";

afterAll(async () => {
  await pool.end();
});

test("AdRecord.getOne returns data from database for one entry", async () => {
  const ad = await AdRecord.getOne("abc");

  expect(ad).toBeDefined();
  expect(ad.id).toBe("abc");
  expect(ad.name).toBe("Testowa");
});

test("AdRecord.getOne returns null from database for unexisting entry", async () => {
  const ad = await AdRecord.getOne("---");

  expect(ad).toBeNull;
});

test(`AdRecord.findAll returns array of found entries when searching for "a".`, async () => {
  const ads = await AdRecord.findAll("a");

  expect(ads).not.toEqual([]);
  expect(ads[0].id).toBeDefined();
});

test(`AdRecord.findAll returns array  when searching for something that does not exist.`, async () => {
  const ads = await AdRecord.findAll("---------");

  expect(ads).toEqual([]);
});

test(`AdRecord.findAll returns smaller umout of data`, async () => {
  const ads = await AdRecord.findAll("");

  expect((ads[0] as AdEntity).price).toBeUndefined();
  expect((ads[0] as AdEntity).description).toBeUndefined();
});
