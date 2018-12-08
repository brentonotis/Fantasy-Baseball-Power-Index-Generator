package fbpi;

/**
 * Program that takes in fantasy sports data by category and returns an overall 'power rank'
 * Takes each category, sorts by asc or desc order depending on category, enumerates/places numerical value for each user per category,
 * combines each numerical value per category, divides by total number of categories, sorts by numerical ranking value - returns 'power rank'
 * @author Brenton Otis
 * 
 *  --> 12/8 stuck on collecting all keys (integers) and adding per value; Trying to do this while copying to new map
 */

import java.util.*;
import java.util.Map.Entry;
import java.util.stream.Collectors;

public class Fantasy_Power_Index {
	
	private static boolean ASC = true;
	private static boolean DESC = false;
	static int index;
	static int indexTot;
	static Map<Integer, String> indexAvg = new HashMap<>();
	static Map<Integer, String> indexTotal = new HashMap<>();
	
	// Driver
	public static void main (String args[]) {
		
		System.out.println("testing...");
		
		Map<String, Integer> runs = new HashMap<>(); Map<String, Integer> doubles = new HashMap<>(); Map<String, Integer> triples = new HashMap<>(); Map<String, Integer> hr = new HashMap<>(); Map<String, Integer> rbi = new HashMap<>(); Map<String, Integer> sb = new HashMap<>(); Map<String, Double> avg = new HashMap<>();
		
		runs.put("Aaron", 469); runs.put("Michael", 478); runs.put("AustinS", 511); runs.put("MattV", 464); runs.put("Cameron", 477); runs.put("Brenton", 436); runs.put("AustinM", 441); runs.put("Luke",  450); runs.put("MattM",  455); runs.put("Evan", 443); runs.put("Cory",  470); runs.put("Justin",  458);
		doubles.put("Aaron", 197); doubles.put("Michael", 190); doubles.put("AustinS", 178); doubles.put("MattV", 174); doubles.put("Cameron", 179); doubles.put("Brenton", 152); doubles.put("AustinM", 152); doubles.put("Luke",  195); doubles.put("MattM",  187); doubles.put("Evan", 139); doubles.put("Cory",  236); doubles.put("Justin",  183);
		triples.put("Aaron", 20); triples.put("Michael", 12); triples.put("AustinS", 15); triples.put("MattV", 18); triples.put("Cameron", 21); triples.put("Brenton", 21); triples.put("AustinM", 13); triples.put("Luke",  19); triples.put("MattM",  13); triples.put("Evan", 8); triples.put("Cory",  9); triples.put("Justin",  20);
		hr.put("Aaron", 129); hr.put("Michael", 118); hr.put("AustinS", 132); hr.put("MattV", 120); hr.put("Cameron", 131); hr.put("Brenton", 142); hr.put("AustinM", 149); hr.put("Luke",  148); hr.put("MattM",  140); hr.put("Evan", 128); hr.put("Cory",  125); hr.put("Justin",  114);
		rbi.put("Aaron", 425); rbi.put("Michael", 438); rbi.put("AustinS", 512); rbi.put("MattV", 436); rbi.put("Cameron", 431); rbi.put("Brenton", 404); rbi.put("AustinM", 498); rbi.put("Luke",  453); rbi.put("MattM", 417); rbi.put("Evan", 409); rbi.put("Cory", 471); rbi.put("Justin", 429);
		sb.put("Aaron", 42); sb.put("Michael", 62); sb.put("AustinS", 59); sb.put("MattV", 67); sb.put("Cameron", 77); sb.put("Brenton", 60); sb.put("AustinM", 46); sb.put("Luke", 33); sb.put("MattM", 82); sb.put("Evan", 32); sb.put("Cory",  35); sb.put("Justin", 47);
		avg.put("Aaron", .2624); avg.put("Michael", .2540); avg.put("AustinS", .2650); avg.put("MattV", .2584); avg.put("Cameron", .2625); avg.put("Brenton", .2395); avg.put("AustinM", .2493); avg.put("Luke", .2592); avg.put("MattM", .2589); avg.put("Evan", .2527); avg.put("Cory", .2653); avg.put("Justin", .2589);
		
		Map<String, Integer> sortRuns = valueSort(runs, DESC);
		System.out.println("Sorted Runs: ");
		System.out.println("-----------");
		printMap(sortRuns);
		System.out.println(indexAvg);
		
		Map<String, Integer> sortDoubles = valueSort(doubles, DESC);
		System.out.println("Sorted Doubles: ");
		System.out.println("--------------");
		printMap(sortDoubles);
		System.out.println(indexAvg);
		
		Map<String, Integer> sortTriples = valueSort(triples, DESC);
		System.out.println("Sorted Triples: ");
		System.out.println("--------------");
		printMap(sortTriples);
		
		Map<String, Integer> sortHr = valueSort(hr, DESC);
		System.out.println("Sorted HR's: ");
		System.out.println("-----------");
		printMap(sortHr);
		
		Map<String, Integer> sortRbi = valueSort(rbi, DESC);
		System.out.println("Sorted RBI's: ");
		System.out.println("------------");
		printMap(sortRbi);
		
		Map<String, Integer> sortSb = valueSort(sb, DESC);
		System.out.println("Sorted SB's: ");
		System.out.println("-----------");
		printMap(sortSb);
		
		Map<String, Double> sortAvg = valueSortDoubs(avg, DESC);
		System.out.println("Sorted Avg: ");
		System.out.println("----------");
		printMapDoubs(sortAvg);
			
	}
	
	// TODO: method to convert map (int, str) to (str str)? If needed
	public static void convertToString(Map<Integer, String> map) {
		
		for (Map.Entry<Integer, String> entry : map.entrySet()) {
			//? indexTotal.put(Integer.toString(entry.getKey()), entry.getValue());
			
		}
	}
	
	// TODO: method that adds all key(index) integers for each value 
	public static void getIndexTot(Map<Integer, String> map) {
		
		Map<String, String> indexTotal = new HashMap<>();
		
		for (Map.Entry<Integer, String> entry : map.entrySet()) {
			String myKey = Integer.toString(entry.getKey());
			//? indexTot.put(entry.getKey(), entry.getValue());
		}
	}
	
	/**
	 * Helper method, iterates through map and prints key/value pairs, creates index for each key
	 * @param map - map to print
	 */
	public static void printMap(Map<String, Integer> map) {
		
		int index = 1;
		for (Map.Entry<String, Integer> entry : map.entrySet()){
			System.out.println(index + " " + entry.getKey() + ": " + entry.getValue());
			indexAvg.put(index, entry.getKey());
			index++;
 		}
	}
	// Identical to above printMap helper, but allows for printing Doubles instead of integers (for ba/era/whip/knine categories)
	public static void printMapDoubs(Map<String, Double> map) {
			
		int index = 1;
		for (Map.Entry<String, Double> entry : map.entrySet()){
			System.out.println(index + " " + entry.getKey() + ": " + entry.getValue());
			index++;
		}
	}
	/**
	 * Helper method, Sorts each statistical category from lowest-highest or vice versa (sorts by value)
	 * @param stats - statistical category being evaluated
	 * @param order - ascending or descending order to be sorted (ASC/DESC variables)
	 * @return - LinkedHashMap with key/value pairs in sorted order
	 */
	public static Map<String, Integer> valueSort(Map<String, Integer> stats, final boolean order) {
		
		List<Entry<String, Integer>> list = new LinkedList<>(stats.entrySet());
		
		list.sort((o1, o2) -> order ? o1.getValue().compareTo(o2.getValue()) == 0
				? o1.getKey().compareTo(o2.getKey())
				: o1.getValue().compareTo(o2.getValue()) : o2.getValue().compareTo(o1.getValue()) == 0
				? o2.getKey().compareTo(o1.getKey())
				: o2.getValue().compareTo(o1.getValue()));
		return list.stream().collect(Collectors.toMap(Entry::getKey,  Entry::getValue, (a, b) -> b, LinkedHashMap::new));				
	}
	
	// Identical to above valueSort helper, but allows for sorting Doubles instead of integers (for ba/era/whip/knine categories)
	public static Map<String, Double> valueSortDoubs(Map<String, Double> stats, final boolean order) {
		
		List<Entry<String, Double>> list = new LinkedList<>(stats.entrySet());
		
		list.sort((o1, o2) -> order ? o1.getValue().compareTo(o2.getValue()) == 0
				? o1.getKey().compareTo(o2.getKey())
				: o1.getValue().compareTo(o2.getValue()) : o2.getValue().compareTo(o1.getValue()) == 0
				? o2.getKey().compareTo(o1.getKey())
				: o2.getValue().compareTo(o1.getValue()));
		return list.stream().collect(Collectors.toMap(Entry::getKey,  Entry::getValue, (a, b) -> b, LinkedHashMap::new));				
	}
}
