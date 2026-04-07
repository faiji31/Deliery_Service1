# Vibe Delivery - Bangladesh Pricing Guide

## Quick Reference

### Same City Delivery (Dhaka ↔ Dhaka)

| Type | Base Price | Per Kg | Example 2kg | Example 5kg |
|------|---------|--------|-----------|-----------|
| **Document** | ৳60 | - | ৳60 | ৳60 |
| **Non-Document** | ৳110 | ৳15 | ৳140 | ৳185 |

### Outside City Delivery (Dhaka → Chattogram)

| Type | Base Price | Per Kg | Example 2kg | Example 5kg |
|------|---------|--------|-----------|-----------|
| **Document** | ৳80 | - | ৳80 | ৳80 |
| **Non-Document** | ৳150 | ৳20 | ৳190 | ৳250 |

## Calculation Examples

### Example 1: Multiple Documents (Same City)
**Scenario**: Sending 3 important documents from Dhaka to Dhaka

| Item | Amount |
|------|--------|
| Parcel Type | Document |
| Route | Same City |
| Weight | N/A |
| Base Charge | ৳60 |
| Weight Charge | ৳0 |
| **Total** | **৳60** |

### Example 2: Electronics Package (Same City)
**Scenario**: Sending electronics (monitor) from Dhaka to Dhaka, weighs 4kg

| Item | Amount |
|------|--------|
| Parcel Type | Non-Document |
| Route | Same City |
| Weight | 4kg |
| Base Charge | ৳110 |
| Weight Charge | 4 × ৳15 = ৳60 |
| **Total** | **৳170** |

### Example 3: Cross-District Documents
**Scenario**: Sending documents from Dhaka to Chattogram

| Item | Amount |
|------|--------|
| Parcel Type | Document |
| Route | Outside City |
| Weight | N/A |
| Base Charge | ৳80 |
| Weight Charge | ৳0 |
| **Total** | **৳80** |

### Example 4: Heavy Non-Document (Cross-District)
**Scenario**: Sending clothes package (3kg) from Dhaka to Sylhet

| Item | Amount |
|------|--------|
| Parcel Type | Non-Document |
| Route | Outside City |
| Weight | 3kg |
| Base Charge | ৳150 |
| Weight Charge | 3 × ৳20 = ৳60 |
| **Total** | **৳210** |

## District Categories

### "Same City" (Based on Service Center)
Same base location for sender and receiver

**Examples:**
- Dhaka → Dhaka ✅ (Same city rate)
- Chattogram → Chattogram ✅ (Same city rate)

### "Outside City" 
Different locations

**Examples:**
- Dhaka → Chattogram (Outside city rate)
- Dhaka → Sylhet (Outside city rate)
- Chattogram → Rangpur (Outside city rate)

## Parcel Types

### Document
- Letters
- Certificates
- Papers
- Books

**Characteristics:**
- No weight charges (all documents ≤ 500g)
- Lowest cost
- Fast delivery

### Non-Document
- Electronics
- Clothing
- Food items
- Any packaged goods

**Characteristics:**
- Weight-based charges apply
- More expensive base rate
- Can be heavier

## Real-world Pricing Scenarios

### Scenario A: Student Sending Notes (Same City)
**Details:**
- Student in Dhaka sending thesis notes to university library in Dhaka
- Type: Document (light papers)

**Pricing:**
- Route: Same City
- Type: Document
- Weight: 0 (negligible)
- **Cost: ৳60**

---

### Scenario B: E-commerce Order (Same City)
**Details:**
- Online shop in Dhaka sending shoes order to customer in Dhaka
- Weight: 0.8kg

**Pricing:**
- Route: Same City
- Type: Non-Document
- Weight: 0.8kg (rounds to 1kg)
- Base: ৳110
- Weight: 1 × ৳15 = ৳15
- **Cost: ৳125**

---

### Scenario C: Gift Delivery (Cross-District)
**Details:**
- Sending birthday gift (watch) from Dhaka to Chattogram
- Weight: 0.3kg (still charged as 1kg)

**Pricing:**
- Route: Outside City
- Type: Non-Document
- Weight: 0.3kg (rounds to 1kg)
- Base: ৳150
- Weight: 1 × ৳20 = ৳20
- **Cost: ৳170**

---

### Scenario D: Bulk Order (Heavy, Cross-District)
**Details:**
- B2B order from Rajshahi textile factory to Dhaka retail store
- Weight: 8kg

**Pricing:**
- Route: Outside City
- Type: Non-Document
- Weight: 8kg
- Base: ৳150
- Weight: 8 × ৳20 = ৳160
- **Cost: ৳310**

## Pricing Strategy

### Why Different Rates?

1. **Same City vs Outside City**
   - Outside city requires longer routes
   - More fuel consumption
   - Higher operational costs

2. **Document vs Non-Document**
   - Documents are lighter (weight doesn't matter)
   - Non-documents vary in weight
   - Need weight-based pricing for equity

3. **Weight Charges Only for Non-Documents**
   - People pay what they use
   - Encourages consolidation of light items
   - Fair pricing model

## Commission for Riders

*(Backend configuration)*

**Same City Delivery:**
- Rider Commission: 80% of collected fee

**Outside City Delivery:**
- Rider Commission: 60% of collected fee

**Example:**
- Same city non-doc (2kg) = ৳140
  - Rider gets: ৳140 × 80% = ৳112
  - Vibe keeps: ৳140 × 20% = ৳28

- Outside city non-doc (2kg) = ৳190
  - Rider gets: ৳190 × 60% = ৳114
  - Vibe keeps: ৳190 × 40% = ৳76

## Pricing Implementation in Code

### Frontend Calculation
```javascript
// Check route type
const isSameCity = senderCity === receiverCity;

// Get pricing config
const pricingType = isSameCity ? 'sameCity' : 'outsideCity';
const pricing = PRICING[pricingType][parcelType];

// Calculate
let total = pricing.base;
if (weight > 0) {
  total += Math.ceil(weight) * pricing.perKg;
}
```

## Competitive Analysis (Bangladesh Market)

| Company | Doc (Same) | Non-Doc (Same) | Doc (Cross) | Non-Doc (Cross) |
|---------|-----------|---------------|-----------|-----------------|
| **Vibe Delivery** | ৳60 | ৳110 + weight | ৳80 | ৳150 + weight |
| Competitor A | ৳70 | ৳120 | ৳100 | ৳180 |
| Competitor B | ৳65 | ৳130 | ৳85 | ৳160 |

*Vibe Delivery offers competitive and transparent pricing*

## Future Enhancements

- ❌ Bulk discounts (5+ parcels)
- ❌ Subscription packages (monthly unlimited)
- ❌ Weekend surcharges
- ❌ Emergency VIP delivery tier
- ❌ Corporate pricing
- ❌ Seasonal promotions

## Questions?

Contact Support:
- 📧 support@vibedelivery.com
- 📞 +880 1234-567890

## Terms

- All prices in Bangladeshi Taka (৳)
- Final price may vary based on actual weight/dimensions
- Insurance included in base price
- No hidden charges
