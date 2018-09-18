package fbpi;
import java.util.*;
import java.util.Map.Entry;
import java.util.stream.Collectors;

public class Fantasy_Power_Index {
	
	private static boolean ASC = true;
	private static boolean DESC = false;
	
	public static void main (String args[]) {
		
		System.out.println("testing...");
		
		Map<String, Integer> stats = new HashMap<>();
		
		stats.put("Brenton", 100);
		stats.put("Cameron", 101);
		stats.put("Justin", 99);
		
		System.out.println("Unsorted: ");
		printMap(stats);
		
		System.out.println("Sorted by ascending value: ");
		Map<String, Integer> sortAsc = valueSort(stats, ASC);
		printMap(sortAsc);
		
		System.out.println("Sorted by descending value: ");
		Map<String, Integer> sortDesc = valueSort(stats, DESC);
		printMap(sortDesc);
		
	}
		
	public static void printMap(Map<String, Integer> map) {
		
		map.forEach((key, value) -> System.out.println("Key: " + key + " Value: " + value)); 
	
	}
	
	public static Map<String, Integer> valueSort(Map<String, Integer> stats, final boolean order) {
		
		List<Entry<String, Integer>> list = new LinkedList<>(stats.entrySet());
		
		list.sort((o1, o2) -> order ? o1.getValue().compareTo(o2.getValue()) == 0
				? o1.getKey().compareTo(o2.getKey())
				: o1.getValue().compareTo(o2.getValue()) : o2.getValue().compareTo(o1.getValue()) == 0
				? o2.getKey().compareTo(o1.getKey())
				: o2.getValue().compareTo(o1.getValue()));
		return list.stream().collect(Collectors.toMap(Entry::getKey,  Entry::getValue, (a, b) -> b, LinkedHashMap::new));
				
	}	
	
}
